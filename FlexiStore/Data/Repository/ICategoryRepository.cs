using FlexiStore.Data.Entities;
using System.Collections.Generic;

namespace FlexiStore.Data.Repository
{
  public interface ICategoryRepository
  {
    IEnumerable<Category> GetAllCategories();    
  }
}
