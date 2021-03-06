/**
 * 集合是由一组无序且唯一的项组成
 */
function Set() {
	var items = {}

	// 向集合添加一个新的值
	this.add = function(value) {
		if (!this.has(value)) {
			items[value] = value
			return true
		}
		return false
	}

	// 从集合移除一个值
	this.remove = function(value) {
		if (this.has(value)) {
			delete items[value]
			return true
		}
		return false
	}

	// 如果值在集合中返回true，否则返回false
	this.has = function(value) {
		return items.hasOwnProperty(value)
	}

	// 移除集合中所有值
	this.clear = function() {
		items = {}
	}

	// 返回集合中元素的数量
	this.size = function() {
		return this.values().length
	}

	// 返回一个包涵集合中所有值的数组 
	this.values = function() {
		return Object.keys(items)
	}

	// 并集
	this.union = function(otherSet) {
		var unionSet = new Set()
		var values = this.values()

		values.forEach(function(element) {
			unionSet.add(element)
		})

		values = otherSet.values()

		values.forEach(function(element) {
			unionSet.add(element)
		})

		return unionSet
	}

	// 交集
	this.intersection = function(otherSet) {
		var intersectionSet = new Set()

		var values = this.values()
		values.forEach(function(element) {
			if (otherSet.has(element)) {
				intersectionSet.add(element)
			}
		})

		return intersectionSet
	}

	// 差集
	this.difference = function(otherSet) {
		var differenceSet = new Set()

		var values = this.values()
		values.forEach(function(element) {
			if (!otherSet.has(element)) {
				differenceSet.add(element)
			}
		})

		return differenceSet
	}

	// 子集
	this.subset = function(otherSet) {
		if (this.size() > otherSet.size()) {
			return false
		} else {
			var values = this.values()

			for (var i = 0; i < values.length; i++) {
				if (!otherSet.has(values[i])) {
					return false
				}
			}
			return true
		}
	}
}

var set = new Set()

console.log(set.add(1)) // true
console.log(set.has(1)) // true 
console.log(set.values()) // [1]
console.log(set.size()) // 1

console.log(set.add(2)) // true
console.log(set.has(2)) // true
console.log(set.values()) // [1, 2]
console.log(set.size()) // 2

console.log(set.add(1)) // false
console.log(set.add(2)) // false

console.log(set.remove(1)) // true
console.log(set.values()) // [2]
console.log(set.size()) // 1

set.clear()
console.log(set.size()) // 0	

var setA, setB

setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)

setB = new Set()
setB.add(2)
setB.add(3)
setB.add(4)

console.log(setA.union(setB).values())
console.log(setA.intersection(setB).values())
console.log(setA.difference(setB).values())
console.log(setA.subset(setB))