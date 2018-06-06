using FlexiStore.Data.Entities;
using System.Collections.Generic;

namespace FlexiStore.Data.Repository
{
    public interface IProductRepository
    {
        IEnumerable<Product> GetAllProducts();
        IEnumerable<Product> GetProductsByCategory(string category);
        Product GetProductById(int id);
    }
}
