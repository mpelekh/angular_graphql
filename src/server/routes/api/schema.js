import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull
} from 'graphql';

// In memory data store
const TodoStore = [
    'First todo item',
    'Second todo item',
    'Third todo item'
];

// Root level queries
const TodoesQuery = new GraphQLObjectType({
    name  : 'TodoesQuery',
    fields: () => ({
        items: {
            type       : new GraphQLList(GraphQLString),
            description: 'List of todo items',
            resolve() {
                return TodoStore.concat([]);
            }
        }
    })
});

// Mutations
const TodoesMutations = new GraphQLObjectType({
    name  : 'TodoesMutations',
    fields: () => ({
        addItem: {
            type       : GraphQLString,
            description: 'Add a new todo item',
            args       : {
                item: {
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve(parent, {item}) {
                //if (TodoStore.length >= 10) {
                //    // Remove the third time by keeping the first two
                //    TodoStore.splice(2, 1);
                //}

                TodoStore.push(item);
                return item;
            }
        }
    })
});

// Schema
const TodoesSchema = new GraphQLSchema({
    name    : 'TodoesSchema',
    query   : TodoesQuery,
    mutation: TodoesMutations
});

export default TodoesSchema;