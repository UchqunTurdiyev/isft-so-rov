import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";


export default function Footer () {

    return(
        <div className="w-full h-20 mt-64 flex items-center justify-center gap-4 text-2xl border-t border-gray-300">

        <div className="w-full h-20  flex items-center justify-center gap-4 text-2xl border-t border-gray-500">

            <Link href="https://t.me/samarqand_isft"><FaTelegramPlane /></Link>
            <Link href="https://instagram.com/isft_samarqand"><FaInstagram /></Link>
            <Link href="https://www.facebook.com/profile.php?id=61569613530481"><FaFacebookF /></Link>
            <Link href="https://www.youtube.com/@isft_samarqand"><FaYoutube /></Link>
        </div>
        </div>
    )
}