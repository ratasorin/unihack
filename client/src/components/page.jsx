export function Page(props) {
    return (
        // Centered page
        <div className='max-w-5xl mx-auto pt-20 px-2 pb-2'>
            {props.children}
        </div>
    );
}
