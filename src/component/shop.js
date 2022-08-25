import React from 'react';
import Books from './books';
import list from '../styles/data';

const Shop = () => {
    return (
        <section>
            {list.map((items) => <Books />
            )}

        </section>
    );
};

export default Shop;