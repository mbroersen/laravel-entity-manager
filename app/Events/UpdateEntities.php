<?php

namespace App\Events;

use App\EntityStore\EntityUpdate;
use App\Service\EntityService;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class UpdateEntities implements ShouldBroadcast
{
    use Dispatchable;
    use InteractsWithSockets;
    use SerializesModels;

    public $broadcastable = [];

    /**
     * Create a new event instance.
     *
     * @param  EntityUpdate[]  $entityUpdates
     *
     * @throws \ReflectionException
     */
    public function __construct(array $entityUpdates)
    {
        foreach ($entityUpdates as $entityUpdate) {
            $modelResource = EntityService::getResource(get_class($entityUpdate->model));
            $this->broadcastable[] = [
                'model' => class_basename($entityUpdate->model),
                'data' => new $modelResource($entityUpdate->model, true),
                'action' => $entityUpdate->action,
                'ignores' => $entityUpdate->ignores,
                'updates' => $entityUpdate->updates
            ];
        }
    }

    /**
     * @return array
     * @throws \Throwable
     */
    public function broadcastWith(): array
    {
        return ['entityUpdates' => $this->broadcastable];
    }
    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PresenceChannel('Entity');
    }
}
