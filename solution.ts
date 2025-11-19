const formatValue = (
  input: string | number | boolean
): string | number | boolean => {
  if (typeof input === "string") {
    const output = input.toUpperCase();
    return output;
  } else if (typeof input === "number") {
    const output = input * 10;
    return output;
  } else if (typeof input === "boolean") {
    if (input) {
      return false;
    } else {
      return true;
    }
  } else {
    return "Wrong Input";
  }
};

const getLength = (input: string | number[] | string[]): number | undefined => {
  if (typeof input === "string") {
    const length = input.length;
    return length;
  } else if (Array.isArray(input)) {
    const length = input.length;
    return length;
  } else {
    return undefined;
  }
};

class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getDetails(): string {
    
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}



type items = {
  title: string;
  rating: number;
};

const filterByRating = (input: items[]): items[] => {
  const highRatedItems = input.filter((item) => {
    return item.rating >= 4;
  });

  return highRatedItems;
};

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (user: User[]): User[] => {
  const activeUsers = user.filter((user: User) => {
    return user.isActive === true;
  });
  return activeUsers;
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (input: Book) => {
  console.log(
    ` 
                    title: ${input.title},
                    author: ${input.author},
                    publishedYear: ${input.publishedYear},
                    isAvailable: ${input.isAvailable},

                `
  );
};

const getUniqueValues = (
  arr1: (number | string)[],
  arr2: (number | string)[]
): (number | string)[] => {
  const newArr: (number | string)[] = [];
  const sizeOfArr1 = arr1.length;

  const sizeOfArr2 = arr2.length;

  let i = 0,
    j = 0;

  for (i = 0; i < sizeOfArr1; i++) {
    newArr[i] = arr1[i];
  }

  for (j = 0; j < sizeOfArr2; j++) {
    newArr[i] = arr2[j];
    i++;
  }

  const uniqueArr: (number | string)[] = [];

  const seen: { [key: string | number]: boolean } = {};
  const size = newArr.length;

  let k = 0;

  for (i = 0; i < size; i++) {
    const value = newArr[i];

    if (!seen[value]) {
      uniqueArr[k] = value;
      seen[value] = true;
      k++;
    }
  }
  return uniqueArr;
};

type Arr = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (input: Arr[]): number => {
  const finalTotalprice: number = input.reduce((total, product) => {
    const subTotal = product.quantity * product.price;

    const discountPercentage = product.discount ?? 0;

    const discountedPrice = (subTotal * discountPercentage) / 100;

    const totalPrice = subTotal - discountedPrice;

    return total + totalPrice;
  }, 0);

  return finalTotalprice;
};


