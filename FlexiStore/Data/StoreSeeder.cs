using FlexiStore.Data.Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace FlexiStore.Data
{
    public class StoreSeeder
    {
        private readonly StoreContext _context;
        private readonly IHostingEnvironment _host;
        private readonly UserManager<StoreUser> _userManager;

        public StoreSeeder(StoreContext context,IHostingEnvironment host, UserManager<StoreUser> userManager)
        {
            this._context = context;
            this._host = host;
            this._userManager = userManager;
        }

        public async Task Seed()
        {
            _context.Database.EnsureCreated();

            var user = await _userManager.FindByEmailAsync("charis@charistech.com");

            if (user == null)
            {
                user = new StoreUser()
                {
                    FirstName = "charis",
                    LastName = "tech",
                    UserName = "charis@charistech.com",
                    Email = "charis@charistech.com"
                };

                var result = await _userManager.CreateAsync(user, "P@ssw0rd!");
                if (result != IdentityResult.Success)
                {
                    throw new InvalidOperationException("Failed to create default user");
                }
            }

            if (!_context.Products.Any())
            {
                // Need to create sample data
                var filepath = Path.Combine(_host.ContentRootPath, "Data/sample.json");
                var json = File.ReadAllText(filepath);
                var products = JsonConvert.DeserializeObject<IEnumerable<Product>>(json);
                _context.Products.AddRange(products);

                var order = new Order()
                {
                    OrderDate = DateTime.Now,
                    OrderNumber = "12345",
                    User = user,
                    Items = new List<OrderItem>()
                    {
                        new OrderItem()
                        {
                          Product = products.First(),
                          Quantity = 5,
                          UnitPrice = products.First().Price
                        }
                    }
                };

                _context.Orders.Add(order);

                _context.SaveChanges();

            }
        }

    }
}
