import graphql from 'graphql';
import _ from 'lodash';
import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema,
	GraphQLNonNull,
	GraphQLID
} from 'graphql';

const users = [
	{id: '23', firstName: "Bill", age: 20},
	{id: '47', firstName: "Sam", age: 35}
]

const UserType = new GraphQLObjectType({
	name: "User",
	fields: {
		id: { type: new GraphQLNonNull(GraphQLID)},
		firstName: {type: GraphQLString},
		age: { type: GraphQLInt}
	}
})

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		user: {
			type: UserType,
			args: {id: {type: GraphQLString} },
			resolve(parentValue, args) {
				return _.find(users, {id: args.id})
			}
		}
	}
})

module.exports = new GraphQLSchema({
	query: RootQuery
})
