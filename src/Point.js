import {overload} from './Overload'

export class Point {
    constructor(row = null, col = null) {
        this._row = row | 0 
        this._col = col | 0 
        
        this.set = overload( {
            'number, number': (row, col) => { this._set(row, col) },
            [Point.TYPE]: (p) => { this._set(...p) },
            'Array': (p) => { this._set(...p) },  
        })

        this.add = overload( {
            'number, number': (row, col) => { return this._add(row, col) },
            [Point.TYPE] : (p) => { return this._add(...p) },
            'Array': (p) => { return this._add(...p) },  
        })

        this.sub = overload( {
            'number, number': (row, col) => { return this._sub(row, col) },
            [Point.TYPE]: (p) => { return this._sub(...p) },
            'Array': (p) => { return this._sub(...p) },  
        })

        this.equals = overload( {
            'number, number': (row, col) => { return this._equals(row, col) },
            [Point.TYPE]: (p) => { return this._equals(...p) },
            'Array': (p) => { return this._equals(...p) },  
        })
    }

    static get TYPE() { return 'Point' }

    get row() { return this._row | 0 }
    set row(value) { this._row = value }

    get col() { return this._col | 0 }
    set col(value) { this._col = value }

    _set(row, col) {
        this.row = row
        this.col = col
    }

    _add(row, col) {
        return new Point(this.row + row, this.col + col)
    }

    _sub(row, col) {
        return new Point(this.row - row, this.col - col)
    }

    _equals(row, col) {
        return this.row === row && this.col === col
    }

    rotate(angle) {
        return new Point(Math.round(Math.cos(angle) * this.row - Math.sin(angle) * this.col),
            Math.round(Math.sin(angle) * this.row + Math.cos(angle) * this.col))
    }

    rotateClockwise() {
        return this.rotate(Math.PI * 0.5)
    }

    rotateCounterClockwise() {
        return this.rotate(Math.PI * -0.5)
    }

    [Symbol.iterator] = function* () {
        yield this.row
        yield this.col
    }
}

