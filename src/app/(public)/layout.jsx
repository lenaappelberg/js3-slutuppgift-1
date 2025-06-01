import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

const { default: Navbar } = require("@/components/ui/navbar");

function Publiclayout ({children}){
    return(
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
            <Navbar/>
            
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}
export default Publiclayout