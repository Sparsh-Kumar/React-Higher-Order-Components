import axios from 'axios';
import React, { ChangeEvent } from 'react';
import { HocProps, HocState, User, Todo } from './types';

const HigherOrderComponent = <T extends User | Todo>(WrappedComponent: React.ComponentClass<{ data?: T[] }>, entity: string) => {
  return class extends React.Component<HocProps<T>, HocState<T>> {
    constructor(props: HocProps<T>) {
      super(props);
      this.state = {
        list:[],
        term: '',
        filteredList: [],
      };
      this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    public async componentDidMount(): Promise<void> {
      await this.loadData();
    }

    public async loadData(): Promise<void> {
      const { data }: { data: T[] } = await axios.get(
        `https://jsonplaceholder.typicode.com/${entity}`
      );
      this.setState({ ...this.state, list: data, filteredList: data });
    }

    public async onChangeHandler(e: ChangeEvent<HTMLInputElement>): Promise<void> {
      const targetValue: string = e.target.value;
      const filteredList = this.state.list.filter((val: T) => {
        if ('name' in val) {
          return val.name.toLowerCase().includes(targetValue.toLowerCase());
        } else if ('title' in val) {
          return val.title.toLowerCase().includes(targetValue.toLowerCase());
        }
      });
      this.setState({ ...this.state, filteredList, term: targetValue });
    }

    public render(): JSX.Element {
      const filteredList = this.state.filteredList;
      return (
        <div>
          <h1>Higher Order Component - {entity}</h1>
          <input type='text' value={this.state.term} onChange={this.onChangeHandler}/>
          <WrappedComponent data={filteredList}></WrappedComponent>
        </div>
      )
    }
  }
}


export default HigherOrderComponent;


