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