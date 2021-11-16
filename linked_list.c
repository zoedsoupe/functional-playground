#inlude <stdlib.h>

// LINKED LIST
/*
 * [1, 2, 3, 4]
 *
 * l = {1, 2, 3, 4}
 * hd(l) => 1
 * tl(l) => {2, 3, 4}
 *
 * hd(l) => 2
 * tl(l) => {3, 4}
 *
 * hd(l) => 3
 * tl(l) => {4}
 *
 * hd(l) => 4
 * tl(l) => {}
 *
 * hd({}) => ERRO
 * tl({}) => {}
 * */
typedef struct List {
  int head;
  List* tail;
} List;

int hd(List* l) {
  return l.head;
}

List* tl(List* l) {
  return l.tail;
}
