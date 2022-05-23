#!/bin/bash

function insertBefore {

    sed -i "" -e "s/$1/$2$1/" $3
}

function insertBefore {

    sed -i "" -e "s/$1/$2$1/" $3
}

function compileGameObject {

    echo 
    echo Processing $1
    echo 

    cd ts
        npx tsc -t esnext --outDir ../js "$1".ts &> /dev/null
        npx tsc -t esnext --outDir ../js register"$1"Factory.ts &> /dev/null
    cd ..
    
    cd ts-module
        insertBefore 'class' 'import Phaser from "phaser";\nimport drawRoundedRectangle from ".\/drawRoundedRectangle";\n\nexport default ' "$1".ts
        npx tsc -t esnext --outDir ../js-module "$1".ts &> /dev/null

        insertBefore "function register$1Factory" "import Phaser from \"phaser\";\nimport $1 from \".\/$1\";\n\nexport default " register"$1"Factory.ts
        npx tsc -t esnext --outDir ../js-module register"$1"Factory.ts &> /dev/null
    cd ..
}

function compileFunc {

    echo 
    echo Processing $1
    echo 

    cd ts
        npx tsc -t esnext --outDir ../js "$1".ts &> /dev/null
    cd ..

    cd ts-module
        insertBefore 'function ' 'import Phaser from "phaser";\n\nexport default ' "$1".ts
    cd ..
}

cd source/plugins/*/code-resources

rm -Rf js js-module ts-module
mkdir js js-module ts-module

cp -R ts/*.ts ts-module/


