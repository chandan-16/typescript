interface User {
    name: string;
    age: number;
    isAdmin: boolean;
}

interface LoginUser {
    (email: string, password: string): boolean;
}

interface SignUp {
    (name: string, email: string, password: string): boolean;
}

interface Movie {
    id: number;
    title: string;
}

interface MovieDetail extends Movie {
    trailer: string;
    summary: string;
    duration: number;
}

interface MovieData extends MovieDetail{
    budget: number;
    releaseDate: number;
}

export const Interface = () => {

    const movieData: MovieData = {
        id: 1001,
        title: 'Hera Pheri',
        trailer: 'Trailer released',
        summary: 'Story of three people and their urge to get rich.',
        duration: 2.75,
        budget: 1000000000,
        releaseDate: 2007
    }
    
    let user: User = {
        name: 'samyak',
        age: 26,
        isAdmin: true
    }

    const login: LoginUser = (email, password) => {
        return email === 'admin@gmail.com' && password === 'samyak';
    }

    const signUp: SignUp = (name, email, password) => {
        return name === 'samyak' && email === 'samyak@gmail.com' && password === 'samyak-16'
    }

  return (
    <div>Interface</div>
  )
}
