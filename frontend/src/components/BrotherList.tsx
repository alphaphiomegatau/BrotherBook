import React from 'react';

import { ISearchProps } from '../interfaces/ISearchInterface';
import { Grid } from '@material-ui/core';

import { IBrothers, IBrother } from '../interfaces/IBrotherInterfaces';
import BrotherCard from './BrotherCard';

const matchBrotherToSearch = (brother: IBrother, searchQuery: string) => {
    const search_arr = [
        brother.firstName + ' ' + brother.lastName,
        brother.family,
        brother.nickname,
        brother.brotherNumber + '',
        brother.pledgeClass
    ];
    return search_arr
        .filter((search) => search)
        .map((search) => search && search.toLowerCase())
        .map((search) => search && search.includes(searchQuery.toLowerCase()))
        .find((search) => search === true);
}

const BrotherList: React.FC<ISearchProps & IBrothers> = ({searchQuery, setSearchQuery, brothers}) => {
    const filteredBrothers = brothers.filter((brother) => {
        if (searchQuery.trim() === '') {
            return true;
        } else {
            return matchBrotherToSearch(brother, searchQuery);
        }
    });
    const brotherCards = filteredBrothers.slice(0, 100).map((brother) => <BrotherCard key={brother._id} brother={brother} />);

    return (
        <Grid direction='column' container justify='center' alignItems='center'>
            {brotherCards}
        </Grid>
    )
}

export default BrotherList;
