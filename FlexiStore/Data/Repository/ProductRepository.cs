using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlexiStore.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace FlexiStore.Data.Repository
{
    public class ProductRepository : IProductRepository
    {
        private readonly StoreContext _context;
        private readonly ILogger<ProductRepository> _logger;

        public ProductRepository(StoreContext context, ILogger<ProductRepository> logger)
        {
            this._context = context;
            this._logger = logger;
        }
        public IEnumerable<Product> GetAllProducts()
        {
            try
            {
                _logger.LogInformation("GetAllProducts was called");

                return _context.Products         
                    .Include(p=>p.MainCategory)
                    .Include(p=>p.Brand)
                           .OrderBy(p => p.Title)                           
                           .ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get all products: {ex}");
                return null;
            }
        }

        public IEnumerable<Product> GetProductsByCategory(string category)
        {
            return _context.Products
                    .Include(p => p.MainCategory)
                    .Include(p => p.Brand)
                 .Where(p => p.MainCategory.Name.ToLower() == category.ToLower())
                 .OrderBy(p=>p.Title)
                 .ToList();
        }

        public Product GetProductById(int id)
        {
            return _context.Products
                    .Include(p => p.MainCategory)
                    .Include(p => p.Brand)
                 .Where(p => p.Id == id)
                 .SingleOrDefault();
                 
        }
    }
}
