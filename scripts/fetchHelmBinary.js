const { createWriteStream, createReadStream } = require('node:fs')
const { createHash } = require('node:crypto')
const { resolve, join } = require('node:path')
const { mkdir, readFile, rm } = require('node:fs/promises')
const { get } = require('node:https')
const { arch, type } = require('node:os')
const { pipeline } = require('node:stream')
const { createGunzip } = require('node:zlib')
const { extract } = require('tar-fs')
const { promisify } = require('node:util')

const pipelineAsync = promisify(pipeline)

const helmVersion = '3.12.1'
const hashmap = {
    darwin: {
        amd64: 'f487b5d8132bd2091378258a3029e33ee10f71575b2167cdfeaf6d0144d20938',
        arm64: 'e82e0433589b1b5170807d6fec75baedba40620458510bbd30cdb9d2246415fe'
    },
    linux: {
        amd64: '1a7074f58ef7190f74ce6db5db0b70e355a655e2013c4d5db2317e63fa9e3dea',
        arm64: '50548d4fedef9d8d01d1ed5a2dd5c849271d1017127417dc4c7ef6777ae68f7e'
    },
    windows: {
        amd64: '9040f8f37c90600a51db4934c04bc9c2adc058cb2161e20b5193b3ba46de10fa'
    }
}



async function downloadHelmBinary(version, os, arch, downloadLocation) {
    console.log(`Downloading binary for version = ${version}, os = ${os}, arch = ${arch}, to download folder = ${downloadLocation}`)
    const downloadUrl = `https://get.helm.sh/helm-v${version}-${os}-${arch}.tar.gz`
    const file = createWriteStream(join(downloadLocation, 'helm.tar.gz'))
    try {
        await new Promise((resolve, reject) => {
            try {
                get(downloadUrl, (resp) => {
                    resp.pipe(file)
                    file.on('finish', resolve)
                    file.on('error', reject)
                })
            } catch (err) {
                reject(err)
            }
        })
    } finally {
        file.close()
    }
}

async function verifyHelmBinary(os, arch, downloadFolder) {
    const fileContents = await readFile(join(downloadFolder, 'helm.tar.gz'))
    const hash = createHash('sha256').update(fileContents).digest('hex')
    return hash == hashmap[os][arch]
}

function getOsType() {
    const osType = type()
    return osType.split(' ')[0].split('_')[0].toLowerCase()
}

function getArch() {
    const archType = arch()
    switch(archType) {
        case 'x64':
            return 'amd64'
        default:
            return archType
    }
}

async function extractTar(downloadFolder) {
    await pipelineAsync(createReadStream(join(downloadFolder, 'helm.tar.gz')), createGunzip(), extract(downloadFolder, {
        ignore (name) {
            if (name.endsWith('/')) return false
            if (name.endsWith('helm')) return false
            if (name.endsWith('.exe')) return false
            return true
        }
      }))
}

async function cleanUp(downloadFolder) {
    await rm(join(downloadFolder, 'helm.tar.gz'))
} 

async function main() {
    console.log('Fetching helm binary')
    const binFolder = resolve('./bin')
    await mkdir(binFolder, {
        recursive: true
    })
    const os = getOsType()
    const arch = getArch()
    await downloadHelmBinary(helmVersion, os, arch, binFolder)
    if(!await verifyHelmBinary(os, arch, binFolder)) throw new Error('Binary integrity validation failed!')
    await extractTar(binFolder)
    await cleanUp(binFolder)
}

if(process.env.NODE_HELM_SKIP_DOWNLOAD != true) {
    main().then(() => console.log('Finished Downloading Helm Binary'))
}