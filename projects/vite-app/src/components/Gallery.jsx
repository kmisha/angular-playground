import Profile from "./Profile";

export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <div className="flex gap-4">
                {Array.from({ length: 4 }, (_, idx) => <Profile src={"https://i.imgur.com/MK3eW3As.jpg"} alt={"Katherine Johnson"} key={idx}/>) }
                <Profile src={"https://i.imgur.com/MK3eW3As.jpg"} alt={"Katherine Johnson"} id={123} isAvatar={true}/>
            </div>
        </section>
    );
}
