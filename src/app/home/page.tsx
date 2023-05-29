import { LoginContext } from '@/context';
import { colors } from '@/utils';

const page = () => {

    return (

        <div
            className='flex flex-col items-center  w-100 h-auto rounded-xl shadow-xl'
            style={{
                backgroundColor: `${colors.colors.purple}`,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
                color: 'white'

            }}

        >


            <div>
                <h1>Hello! This is Animal Crossing </h1>


            </div>

        </div>
    )
}


export default page