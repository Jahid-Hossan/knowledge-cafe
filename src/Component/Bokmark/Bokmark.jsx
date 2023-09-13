

const Bokmark = ({ item }) => {
    const { title, id } = item;


    return (
        <div className=" bg-white p-5 rounded-lg">
            <h2>{title}</h2>
        </div>
    );
};

export default Bokmark;