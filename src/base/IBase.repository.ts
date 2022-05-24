export abstract class IBaseRepository<T, DTO> {
    abstract create(dto: DTO): Promise<T>;
    
    abstract findAll(): Promise<T[]>;

    abstract findOne(id: string): Promise<T>;

    abstract update?(id: string, item: DTO): Promise<T>;

    abstract delete(id: string): Promise<T>;

}