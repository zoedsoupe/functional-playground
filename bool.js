const TRUE = (a) => (b) => a
TRUE(1)()

const FALSE = (a) => (b) => b
FALSE()(2)

const NOT = (boolean) => boolean(FALSE)(TRUE)
NOT(TRUE)

const AND = (a) => (b) => a(b)(FALSE)
AND(TRUE)(TRUE)
AND(TRUE)(FALSE)
AND(FALSE)(TRUE)
AND(FALSE)(FALSE)

const OR = (a) => (b) => a(TRUE)(b)
OR(TRUE)(TRUE)
OR(TRUE)(FALSE)
OR(FALSE)(TRUE)
OR(FALSE)(FALSE)
