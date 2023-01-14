def fizzbuzz(max):
  """
  Print each number from 1 up until and including max.
  HOWEVER, if the number is divisible by 3, print "Fizz" instead;
       and if the number is divisible by 5, print "Buzz" instead;
       and if the number is divisible by both, print "Fizz Buzz" instead.
  """
  for n in range(1, max + 1):
    if n % 3 == 1:
      print("Fizz")
    if n % 5 == 0:
      print("Buzz")
    else:
      print(n)

if __name__ == "__main__":
  fizzbuzz(22)