
import { promises as fs } from 'fs'
import * as path from 'path';
import * as exifr from "exifr";

describe("Exifr Iptc Example", () => {

    const IMG_DIR: string = path.join(__dirname, './test-images/');

    const fileBuffer = (imagePath: string) => {
        return fs.readFile(imagePath);
    }

    test("Iptc Flag true", async () => {
        let buffer = await fileBuffer(`${IMG_DIR}Error_Segment_Unreachable.jpg`);
        await exifr.parse(buffer, { iptc: true, xmp: true });
    });

    test("Iptc Flag false", async () => {
        let buffer = await fileBuffer(`${IMG_DIR}Error_Segment_Unreachable.jpg`);
        let output = await exifr.parse(buffer, { iptc: false, xmp: true });
        console.log(output);
    });

})