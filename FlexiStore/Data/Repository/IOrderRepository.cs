using FlexiStore.Data.Entities;
using System.Collections.Generic;

namespace FlexiStore.Data.Repository
{
    public interface IOrderRepository
    {
        IEnumerable<Order> GetAllOrders(bool includeItems);
        IEnumerable<Order> GetAllOrdersByUser(string username, bool includeItems);
        Order GetOrderById(string username, int id);
        void AddOrder(Order newOrder);
    }
}
