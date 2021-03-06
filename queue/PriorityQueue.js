/**
 * 优先队列的添加和移除是基于优先级的
 */
function PriorityQueue() {
	var items = []

	// 按照优先级添加元素
	this.enqueue = function(element, priority) {
		var queueElement = {
			element: element,
			priority: priority
		}

		if (this.isEmpty()) {
			items.push(queueElement)
		} else {
			var added = false
			for (var i = 0; i < items.length; i++) {
				if (queueElement.priority < items[i].priority) {
					items.splice(i, 0, queueElement)
					added = true
					break
				}
			}

			if (!added) {
				items.push(queueElement)
			}
		}
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
		return items
	}
}

var priorityQueue = new PriorityQueue()

priorityQueue.enqueue('a', 3)
priorityQueue.enqueue('b', 4)
priorityQueue.enqueue('c', 1)
priorityQueue.enqueue('d', 2)
priorityQueue.enqueue('e', 0)
priorityQueue.enqueue('f', 8)
priorityQueue.enqueue('g', 3)

console.log(priorityQueue.print())