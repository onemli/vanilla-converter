/*! JointJS+ v4.1.1 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2025 client IO

 2025-07-10 


This Source Code Form is subject to the terms of the JointJS+ Trial License
, v. 2.0. If a copy of the JointJS+ License was not distributed with this
file, You can obtain one at https://www.jointjs.com/license
 or from the JointJS+ archive as was distributed by client IO. See the LICENSE file.*/


// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// Mock method which is not implemented in JSDOM
window.SVGPathElement = jest.fn();

// Mock SVGAngle which is used for sanity checks in Vectorizer library
Object.defineProperty(window, 'SVGAngle', {
    writable: true,
    value: jest.fn().mockImplementation(() => ({
        new: jest.fn(),
        prototype: jest.fn(),
        SVG_ANGLETYPE_UNKNOWN: 0,
        SVG_ANGLETYPE_UNSPECIFIED: 1,
        SVG_ANGLETYPE_DEG: 2,
        SVG_ANGLETYPE_RAD: 3,
        SVG_ANGLETYPE_GRAD: 4
    }))
});

beforeEach(()=>{

    Object.defineProperty(global, 'ResizeObserver', {
        writable: true,
        value: jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn()
        }))
    });

    Object.defineProperty(global.SVGSVGElement.prototype, 'createSVGMatrix', {
        writable: true,
        value: jest.fn().mockImplementation(() => ({
            martix: jest.fn(() => [[]]),
            a: 0,
            b: 0,
            c: 0,
            d: 0,
            e: 0,
            f: 0,
            flipX: jest.fn().mockImplementation(() => global.SVGSVGElement),
            flipY: jest.fn().mockImplementation(() => global.SVGSVGElement),
            inverse: jest.fn().mockImplementation(() => global.SVGSVGElement),
            multiply: jest.fn().mockImplementation(() => global.SVGSVGElement),
            rotate: jest.fn().mockImplementation(() => ({
                translate: jest.fn().mockImplementation(() => ({
                    rotate: jest.fn(),
                })),
            })),
            rotateFromVector: jest.fn().mockImplementation(() => global.SVGSVGElement),
            scale: jest.fn().mockImplementation(() => global.SVGSVGElement),
            scaleNonUniform: jest.fn().mockImplementation(() => global.SVGSVGElement),
            skewX: jest.fn().mockImplementation(() => global.SVGSVGElement),
            skewY: jest.fn().mockImplementation(() => global.SVGSVGElement),
            translate: jest.fn().mockImplementation(() => ({
                multiply: jest.fn().mockImplementation(() => ({
                    multiply: jest.fn().mockImplementation(() => global.SVGSVGElement),
                })),
            })),
        })),
    });

    Object.defineProperty(global.SVGSVGElement.prototype, 'createSVGPoint', {
        writable: true,
        value: jest.fn().mockImplementation(() => ({
            x: 0,
            y: 0,
            matrixTransform: jest.fn().mockImplementation(() => ({
                x: 0,
                y: 0,
            })),
        })),
    });

    Object.defineProperty(global.SVGSVGElement.prototype, 'createSVGTransform', {
        writable: true,
        value: jest.fn().mockImplementation(() => ({
            angle: 0,
            matrix: {
                a: 1,
                b: 0,
                c: 0,
                d: 1,
                e: 0,
                f: 0,
                multiply: jest.fn(),
            },
            setMatrix: jest.fn(),
            setTranslate: jest.fn(),
        })),
    });

});
