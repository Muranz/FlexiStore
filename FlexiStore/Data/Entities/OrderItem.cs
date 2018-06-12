namespace FlexiStore.Data.Entities
{
    public class OrderItem
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        //public string Size { get; set; }
        public Product Product { get; set; }
        public Order Order { get; set; }
    }
}
