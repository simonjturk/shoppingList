/**
 * Careful, this is used to determin the CRUD method to call on a service
 *
 * @export
 * @enum {number}
 */
export enum CRUD_MODE {
    Create = 'create',
    Read = 'read',
    Update = 'update',
    Delete = 'delete'
}