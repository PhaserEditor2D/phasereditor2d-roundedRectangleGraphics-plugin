#!/bin/bash

#!/bin/bash

function compile {

    echo Compiling $1

    cd ts
        npx tsc -t esnext --outDir ../js "$1".ts &> /dev/null
    cd ..
    
    cd ts-module
        sed -i "" -e "s/\/\*//" "$1"
        sed -i "" -e "s/\*\///" "$1"
        npx tsc -t esnext --outDir ../js-module "$1".ts &> /dev/null
    cd ..
}

cd source/plugins/*/code-resources

rm -Rf js js-module ts-module
mkdir js js-module ts-module

cp -R ts/*.ts ts-module/

compile RoundedRectangleGraphics.ts
compile registerRoundedRectangleGraphicsFactory.ts
compile RoundedRectangleImage.ts
compile registerRoundedRectangleImageFactory.ts
compile drawRoundedRectangle.ts