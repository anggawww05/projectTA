import Headline from "./headline";
import Spesification from "./spesification";

export default function SpesificationSection() {
    return (
        <section>
            <Headline />
            <div className="mt-2 flex justify-between gap-2">
                <div>
                    <Spesification />
                    <Spesification />
                    <Spesification />
                </div>
                <div>
                    <Spesification />
                    <Spesification />
                    <Spesification />
                </div>
            </div>
        </section>
    );
}
