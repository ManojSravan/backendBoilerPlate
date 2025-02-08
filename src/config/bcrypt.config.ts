import bcrypt  from 'bcrypt';


class bcryptConfig{
    static hashPassword=async(password:string)=>{
        try {
            const hashedPassword=await bcrypt.hash(password,10)
            return hashedPassword
        } catch (error) {
            console.log(`something is wrong while hashing the password, ${error}`)
        }
    }
    static comparePassword=async(password:string,hashedPassword:string)=>{
        try {
            const comparePassword=await bcrypt.compare(password,hashedPassword)
        } catch (error) {
            console.log(`something is wrong while hashing the password, ${error}`)
        }
    }
}

export default bcryptConfig