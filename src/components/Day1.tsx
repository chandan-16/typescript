type User = {
    name: string;
    age: number;
    isDeveloper: boolean;
}

type Movie = {
    name: string;
    rating: number;
    releaseYear: number;
}

// Optional Properties ( sometimes properties my not exist) 
type Student = {
    name: string;
    age: number;
    phone?: number;
}

// readonly properties
type Employee = {
    readonly id: number;
    name: string;
    readonly nikName: string;
}

// Nested Objects 
type Address = {
    city: string;
    state: string;
}
type Person = {
    name: string;
    age: number;
    address: Address;
}

// Array of Objects 
type Product = {
    id: number;
    name: string;
    price: number;
}

// Union types in objects 
type Order = {
    id: number;
    status: "pending" | "completed" | "cancelled"
}

// Type aliases with arrays 
type Marks = number[]
type Names = string[]

// Combining Types 
type Contact = {
    email: string;
}
type UserDetail = {
    name: string;
}

type UserProfile = UserDetail & Contact;

export const Day1 = () => {

    let userProfile1: UserProfile = {
        email: 'chandan@gmail.com',
        name: 'chandan gautam'
    }

    let nameList: Names = ['chandan', 'roshan', 'suraj']

    let maths: Marks = [90, 85, 98];

    let order1: Order = {
        id: 1001,
        status: "completed"
    }

    let products: Product[] = [
        {
            id: 1001,
            name: 'laptop',
            price: 99999
        },
        {
            id: 1002,
            name: 'keyboard',
            price: 5999
        }
    ]

    let person: Person = {
        name: 'chandan gautam',
        age: 26,
        address: {
            city: 'pune',
            state: 'maharashtra'
        }
    }

    let employee1: Employee = {
        id: 1001,
        name: 'chandan gautam',
        nikName: 'sergi'
    }

    let user1: User = {
        name: 'chandan',
        age: 26,
        isDeveloper: true,
    };
    let user2: User = {
        name: 'samyak',
        age: 27,
        isDeveloper: false
    }
    let movie: Movie = {
        name: 'Hera Pheri',
        rating: 8.9,
        releaseYear: 2007,
    };
    let student1: Student = {
        name: 'chandan gautam',
        age: 26,
    }
    let student2: Student = {
        name: 'samyak gautam',
        age: 27,
        phone: 8459699376
    }

  return (
    <div>Day1</div>
  )
}
