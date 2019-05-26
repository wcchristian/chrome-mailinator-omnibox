
#!/usr/bin/env bash
version='1_0_1'
builddir='builds'
name=chrome-mailinator-omnibox_${version}

mkdir ${builddir}
cd src
zip -r ../${builddir}/${name} *