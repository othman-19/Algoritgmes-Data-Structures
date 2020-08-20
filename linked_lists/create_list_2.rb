# Start with your code from last challenge in the creat_list_1.rb file.
class Node
  attr_accessor :value, :next_node
  
  def initialize(value)
	  @value = value
    @next_node = nil
  end
end

class LinkedList
  #setup head and tail
  def initialize()
    @head= nil
    @tail=nil
  end 
  
  
  def add(number)
    # your code here
    
    if (@head==nil)
      @head=Node.new(number)
    
    else
      current=@head

      while(current.next_node != nil)
        current=current.next_node
      end
      current.next_node=Node.new(number)
    end
  end
  
  "def add(number)
    # your code here
    @new_node = Node.new(number)
    @new_node.next_node = @head 
    @head = @new_node
  end  "
    
  def get(index)
    counter=0
    node=@head
    while(node != nil)
      if (counter == index)
        return node.value
      end
      counter+=1
      node=node.next_node
    end
  end
  
  def get_node(index)
    counter=0
    node=@head
    while(node != nil)
      if (counter == index)
        return node
      end
      counter+=1
      node=node.next_node
    end
  end
  
  def add_at(index, item)
    added=Node.new(item)
    if index==0  
      added.next_node=get_node((index))
      @head=added
    else
      added.next_node=get_node((index))
      get_node(index-1).next_node=added
    end
  end
  
  def remove(index)
    removed=get_node(index)
    if index==0 
      @head=get_node(index+1)
      removed.next_node=nil
    else
      get_node((index-1)).next_node=get_node((index+1))
      removed.next_node=nil
    end
  end
end  

list = LinkedList.new


list.add(8)
list.add(3)


list.add_at(0, 5)

list.add_at(2, 4)

list.remove(1)
p list
#Expected list: [5, 4, 3]


