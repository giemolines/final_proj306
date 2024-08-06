import { LocalShippingRounded, GradeRounded, DirectionsRunRounded } from "@mui/icons-material";
export default function Banner() {
    return(
        <main>
            <div className="relative flex flex-row bg-slate-50 justify-center font-light text-xs p-2 gap-10">
                <div className="flex flex-row gap-2 items-center">
                    <LocalShippingRounded className="h-5 w-5 fill-slate-600" />
                    <p>Next-day delivery</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <GradeRounded className="h-5 w-5 fill-slate-600" />
                    <p>Not Satisfied? Get a full refund</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <DirectionsRunRounded className="h-5 w-5 fill-slate-600" />
                    <p>Process everything online</p>
                </div>
            </div>
        </main>
    );
}