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
end  

list = LinkedList.new

list.add(3)
list.add(5)
list.add(7)
p list

