interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}

interface Person {
    name: string;
}

interface Student extends Person {
    rollNumber: number;
    course: string;
}

interface Movie {
    id: number;
    title: string;
    duration: string;
    production: string;
}

export const Interface2 = () => {

    const Movies: Movie[] = [
        {id: 1001, title: 'Hera Pheri', duration: '2.75min', production: 'ABC Production'},
        {id: 1002, title: 'Phir Hera Pheri', duration: '2.79min', production: 'DEF Production'},
        {id: 1003, title: 'Malamaal Weekly', duration: '2.99min', production: 'GHI Production'}
    ] 


    const student: Student = {
        name: 'Samyak Gautam',
        rollNumber: 1481,
        course: 'Fullstack Developer'
    }

    const product: Product ={
        id: 10001,
        name: 'Asus Gaming Laptop',
        price: 150000,
        inStock: true,
    }

  return (
    <div>Interface2</div>
  )
}
