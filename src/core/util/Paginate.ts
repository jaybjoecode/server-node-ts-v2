import {Request, Response} from 'express';

export class Paginate {
    private options: any;
    private select: string;
    private populate: string;
    private sort: {};

    public constructor(private req: Request){
        this.setOptions();
        this.select = '';
        this.populate = '';
        this.sort = {};
    }

    public getOptions(): any {
        return this.options;
    }

    private setOptions(): void {
        this.options = {
            select:     this.select,
            limit:      parseInt(this.req.query.limit, 10) || 10,
            page:       parseInt(this.req.query.page, 10) || 1,
            populate:   this.populate,
            sort:       this.sort,
        };
    }

    public setSelect(select: string): void {
        this.select = select;
        this.setOptions();
    }

    public setPopulate(populate: string): void {
        this.populate = populate;
        this.setOptions();
    }

    public setSort(sort: {}): void {
        this.sort = sort;
        this.setOptions();
    }

    /////PAGINATE-EXAMPLE-COMPLETE///////
    // const options = {
    //     select:   'title date author',
    //     sort:     { date: -1 },
    //     populate: 'author',
    //     lean:     true,
    //     offset:   20,
    //     limit:    10
    // };
}