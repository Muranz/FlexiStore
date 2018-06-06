using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlexiStore.Data.Entities;
using Microsoft.Extensions.Logging;

namespace FlexiStore.Data.Repository
{
  public class CategoryRepository : ICategoryRepository
  {


    private readonly StoreContext _context;
    private readonly ILogger<CategoryRepository> _logger;

    public CategoryRepository(StoreContext context, ILogger<CategoryRepository> logger)
    {
      this._context = context;
      this._logger = logger;
    }
    public IEnumerable<Category> GetAllCategories()
    {
      try
      {
        _logger.LogInformation("GetAllCategories was called");

        return _context.Category
                   .OrderBy(p => p.Id)
                   .ToList();
      }
      catch (Exception ex)
      {
        _logger.LogError($"Failed to get all products: {ex}");
        return null;
      }
    }
  }
}
