import { FaTwitch, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaSoundcloud} from 'react-icons/fa';

const Socials = () =>{
    return(
        <section>
        <div className="bg-neutral-950 p-10 h-auto shadow-2xl hover:shadow-white shadow-black
                text-center text-lime-700 tracking-wider text-2xl md:text-4xl border-t-2 border-slate-800 border-opacity-20">
            <div>
                <h2 className="mb-8">Redes sociais</h2>
                <ul className="flex gap-9 justify-center text-lime-600 text-3xl sm:text-5xl">
                    <li>
                        <a className="hover:text-orange-700 transition ease-in-out delay-400"
                            href="https://twitter.com/spacechronix" target="_blank"><FaTwitter/></a>
                    </li>
                    <li>
                        <a className="hover:text-orange-700 transition ease-in-out delay-400"
                            href="https://www.facebook.com/Koanjungle" target="_blank"> <FaFacebook/></a>
                    </li>
                    <li>
                        <a className="hover:text-orange-700 transition ease-in-out delay-400"
                            href="https://www.instagram.com/spacechronix/" target="_blank"><FaInstagram/></a>
                    </li>
                    <li>
                        <a className="hover:text-orange-700 transition ease-in-out delay-400"
                            href="https://www.youtube.com/@isbum/videos" target="_blank"><FaYoutube/></a>
                    </li>
                    <li>
                        <a className="hover:text-orange-700 transition ease-in-out delay-400"
                            href="https://www.twitch.tv/spacechronix" target="_blank"><FaTwitch/></a>
                    </li>
                    <li>
                        <a className="hover:text-orange-700 transition ease-in-out delay-400"
                            href="https://soundcloud.com/koanlive" target="_blank"><FaSoundcloud/></a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    )
}

export {Socials}