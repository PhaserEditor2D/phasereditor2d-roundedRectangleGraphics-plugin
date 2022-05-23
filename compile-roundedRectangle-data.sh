#!/bin/bash

function insertBefore {

    sed -i "" -e "s/$1/$2$1/" $3
}

cd source/plugins/phasereditor2d.roundedRectangle/data

rm -Rf js js-module ts-module
mkdir js js-module ts-module

# ts

cd ts
npx tsc -t esnext --outDir ../js RoundedRectangle.ts &> /dev/null
npx tsc -t esnext --outDir ../js registerRoundedRectangleFactory.ts &> /dev/null

function insertBefore {

    sed -i "" -e "s/$1/$2$1/" $3
}

function processType {

    insertBefore 'class' 'import Phaser from "phaser";\n\nexport default ' "$1".ts
    npx tsc -t esnext --outDir ../js-module "$1".ts &> /dev/null
}

function processFactory {

    insertBefore "function register$1Factory" "import Phaser from "phaser";\nimport $1 from \".\/RoundedRectangle\";\n\nexport default " register"$1"Factory.ts
    npx tsc -t esnext --outDir ../js-module register"$1"Factory.ts &> /dev/null
}

# ts-module

cp * ../ts-module
cd ../ts-module

processType RoundedRectangle
processFactory RoundedRectangle


