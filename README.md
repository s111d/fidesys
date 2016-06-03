### Тестовые задания Python

1. a). Никак. Для этого есть UNIX комманда `tac`.
   б). Если всё же нужно реализовать это на Python, наивный подход -
       построчное чтение с конца и запись в новый файл.
   
2. "3" в обоих случаях. Почему это так, можно продемонстрировать добавив после b = a
следующий код:
     print(id(a))
     print(id(b))
   
3. Аналогично предыдущему вопросу:

    x = [[]]*3        # список будет содержать 3 ссылки на один и тот же объект,
    x[0].append('a')  # поэтому нет 
    x[1].append('b')  # разницы через
    x[2].append('c')  # какой элемент его модифицировать;
    x[0]=['d']        # создаётся новый объект и ссылка на него помещается в x[0];
    print x           # таким образом, [['d'], ['a', 'b', 'c'], ['a', 'b', 'c'],]
    
4. Будет выведено 'done' и следом - 0, 1, 2, т.к. __del__() срабатывает уже при сборке
   мусора. Но это поведение не детерминировано, т.к. возможно вмешиваться работу 
   garbage collector'a.
   
5. AttributeError, т.к. в соответствии с "name mangling" атрибуты self.__value
   будут заменены на self._CLASSNAME__value за пределами класса.
   Это можно увидеть через 
       print (b.__dict__)
       
6. AttributeError, т.к. B.__init__() перезаписывает A.__init__() и не происходит
   инициализация аттрибута `_greeting`. Можно исправить, добавив, например
   A.__init__(self) в B.__init__().
   Т.е.:
   
    class A:
        def __init__(self):
            self._greeting = 'hello'
    
        def greet(self):
            print(self._greeting)
    
    
    class B(A):
        def __init__(self):
            A.__init__(self)
            self._greeting_add = ', world'
    
        def greet(self):
            print(self._greeting + self._greeting_add)

    b = B()
    b.greet()
   
### Тестовые задания JavaScript

1. См. answers.js

2. Эта функция вернёт функцию, вызов которой будет приводить к исполнению
   метода `method` в контексте объекта `context`, с передачей всех параметров
   как во время привязки, так и во время вызова. См. примеры в answers.js
   
3. Функция, по-видимому используется для создания объектов с заменой прототипа.
   Возможно, более лаконичным вариантом было бы использование Object.create(object)
   
4. В самом простом варианте эту структуру можно преобразовать в объект, см. answers.js

5. Наиболее правильным было бы преобразовывать это дерево средствами jQuery 
   или какой-либо XML/XSLT библиотеки. 
   Указанный в ответе (см. answers.js) вариант подойдёт в качестве временного решения,
   плюс, он несколько быстрее, т.к. обходится без парсинга.
   
6. Во второй части избыточный immediate invocation и декларация функции в блоке,
   может возникнуть путаница из-за hoisting'a.