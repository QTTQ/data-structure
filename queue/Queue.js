/**
 * 队列是一种遵循先进先出原则的一组有序集合
 * 队列在末尾增加新元素，并从顶部移除元素
 * 最新添加的元素必须排在队列的末尾
 */
function Queue() {
	var items = []

	// 向队列尾部添加元素
	this.enqueue = function(element) {
		items.push(element)
	}

	// 移除队列第一个元素，并返回被移除的元素
	this.dequeue = function() {
		return items.shift()
	}

	// 返回队列的第一个元素，队列不做任何变动
	this.front = function() {
		return items[0]
	}

	// 如果队列不包含任何元素返回true，否则返回false
	this.isEmpty = function() {
		return items.length === 0
	}

	// 移除队列里所有元素
	this.clear = function() {
		items = []
	}

	// 返回队列中包含的元素个数
	this.size = function() {
		return items.length
	}

	// 辅助方法，返回队列内元素
	this.print = function() {
		return items.toString()
	}
}

var queue = new Queue()

console.log(queue.isEmpty()) // true

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(queue.isEmpty()) // false

console.log(queue.print()) // 1, 2, 3

queue.dequeue()

console.log(queue.print()) // 2, 3

console.log(queue.front()) // 2

queue.clear()

console.log(queue.print()) //