# Задание njs_tree_excercise

Целью задания является разработка программы для обработки данных, организованных в древовидную структуру.


## Данные

Информация о дереве находятся в файле `tree_data_mock.js` и задана в виде массива узлов. Каждый узел обязательно содержит его уникальный идентификатор в поле `id`, иначе узел считается некорректным и не участвует в работе программы. Все прочие поля являются опциональными:
- `parent_id` - `id` узла-родителя в дереве. Родитель находится по отношению у узлу ближе к корню дерева, и может быть только один. Если не указан или такого `id` не существует, родителем текущего узла считается корень дерева - узел с полем `default_parent` (см. далее)
- `default_parent` - если равен `true`, то данный узел является корнем дерева, т.е. все узлы у которых не указан `parent_id` ИЛИ `parent_id` указывает на несуществующий узел, будут являться потомками именно этого узла. Узел с таким признаком всегда существует и всегда только один. Для него правило отсутствия `parent_id` не работает, у него родительского узла быть не мможет
- `value` - значение для вычислений, число с плавающей точкой имеющей всего две значащих цифры после запятой, т.е. значение `1.11` является корректным для этого поля, а `2.222` - нет и должно быть сохранено как `2.22`, лишние значащие цифры просто отбрасываются (Math.floor). Если поле отсутствует, пустое, или является некорректным числом, то считается что `value = 0`


## Задание

Разработайте тело функции `incValue`, находящейся в файле `index.js`, таким образом чтобы ее алгоритм работы стал таковым:
* На вход функции передаются два параметра `node_id` и `value_increment`
* `node_id` указывает на `id` узла с которого начинается обход дерева
* `value_increment` - величина усвличения значения `value`, всегда положительное число
* Функция должна посетить все узлы дерева начиная с указанного (`node_id`), вверх, до корня дерева
* В каждом узле дерева функция должна выполнить следующее
    * Увеличить значение `value`
        * Для первого узла (для которого и была вызвана функция `incValue`), на величину `value_increment`
        * Для каждого последующего родительского узла, на 1/4 значения от предыдущего. Т.е. для родителя стартового узла это будет 1/4 `value_increment`, для родителя родителя ("деда" стартового) - 1/16 `value_increment`, для его родителя ("прадеда" стартового) - 1/64 `value_increment` и т.д.
    * Если у родителя посещаемого узла есть другие узлы - "дети", помимо того узла, от кого он получил входящее значение, то им необходимо увеличить значение `value` на 1/10 от значения увеличения в данном узле (т.е. если значение узла увеличивается на 20, то все "братья", должны увеличиться на 2), но не более чем на уже имеющееся у "брата" значение `value` (т.е. если значение увеличения для конкретного "брата" равно 10, а `value` у самого брата 9, то ему полагается только 9. Иными словами нельзя увеличивать значение у "брата" более чем в 2 раза за шаг)
* Все шаги алгоритма должны модифицировать значения непосредственно в массиве узлов `Tree`. В конце работы программы, после прохождения всех тестовых кейсов (уже присутствуют в `index.js`), он будет распечатан, для сверки результата работа алгоритма.

Для запуска программы используйте `node .` в каталоге приложения.

## Общие положения

- Можно использовать любые программные инструменты разработки (библиотеки/npm пакеты, IDE, версии Node.js и т.п.), разрабатывать на любой платформе
- Допускается любое изменение кода, кроме файла `tree_data_mock.js`
- Ориентировочное предполагаемое время на выполнение задания - 40-60 минут
- Данное задание не является обязательным к прохождению, однако позволяет более точно определить квалификацию специалиста, что положительно влияет на оценку профессиональных навыков
