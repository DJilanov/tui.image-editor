/**
 * @author NHN Ent. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview Sharpen extending fabric.fabric.Image.filters.Convolute
 */
import fabric from 'fabric';

/**
 * Sharpen object
 * @class Sharpen
 * @extends {fabric.fabric.Image.filters.Convolute}
 * @ignore
 */
const Sharpen = fabric.fabric.util.createClass(fabric.fabric.Image.filters.Convolute, /** @lends Convolute.prototype */{
    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Sharpen',

    /**
     * constructor
     * @override
     */
    initialize() {
        const matrix = [
            0, -1, 0,
            -1, 5, -1,
            0, -1, 0
        ];
        this.matrix = matrix;
    }
});

export default Sharpen;
