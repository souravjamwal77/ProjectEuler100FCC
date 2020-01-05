# Problem 1: "Multiple of 3 and 5" of Project Euler

def multipleOf3And5(num):
  """ This fundction will check all the numbers from 1 to num 
  and return the sum of them. """

  # below list will hold all the numbers divisible by 3 and 5
  list = []

  #for loop will iterate over numbers from 1 to num 
  for i in range(1, num):
    #if and elif statement will check for divisibility by 3 and 5
    if(i % 3 == 0):
      list.append(i)
    elif(i % 5 ==  0):
      list.append(i)
  
  #sum of numbers of list
  sum_of_list = sum(list)
  return sum_of_list

print(multipleOf3And5(8456))