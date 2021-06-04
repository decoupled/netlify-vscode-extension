import { emptyDirSync } from "fs-extra"
import { crypto_filenameFriendlyHash } from "src/x/crypto/crypto_filenameFriendlyHash"
import { degit_with_retries } from "src/x/degit/degit_with_retries"
import { netlify_vscode_extension_build_target } from "./extension"

{
  // openExtensionOn("git@github.com:redwoodjs/example-blog.git")
  netlify_vscode_extension_build_target.dev.buildAndOpen({
    openOnFolder: "/Users/aldo/com.github/redwoodjs/example-blog",
    disableOtherExtensions: false,
    watchAndReloadLanguageServer: true,
  })
}

{
  // openExtensionOn("git@github.com:redwoodjs/example-blog.git")
  netlify_vscode_extension_build_target.dev.buildAndOpen({
    openOnFolder: "/Users/aldo/com.github/decoupled/netlify-test-site",
    disableOtherExtensions: false,
    watchAndReloadLanguageServer: true,
  })
}

{
  netlify_vscode_extension_build_target.dev.buildPackageAndShowOutput()
}

async function openExtensionOn(gitURL: string) {
  const dir = `/tmp/test-projects/${crypto_filenameFriendlyHash(gitURL)}`
  emptyDirSync(dir)
  await degit_with_retries(gitURL, dir)
  netlify_vscode_extension_build_target.dev.buildAndOpen({
    openOnFolder: dir,
    disableOtherExtensions: true,
  })
}
