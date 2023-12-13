/**
 * Counter blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace counter{
    let counter = 0;
    //% block
    export function addOne():number {
        counter += 1;
        return counter;
    }
}
